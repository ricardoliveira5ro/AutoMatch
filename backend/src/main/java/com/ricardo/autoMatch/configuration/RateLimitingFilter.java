package com.ricardo.autoMatch.configuration;

import com.ricardo.autoMatch.exception.RateLimitingException;
import jakarta.servlet.*;
import jakarta.servlet.http.HttpServletRequest;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicInteger;

public class RateLimitingFilter implements Filter {

    private final Map<String, List<Long>> requestCountsPerIpAddress = new ConcurrentHashMap<>();

    private static final int RATE_LIMIT = 100;
    private static final int RATE_DURATION = 60000; // In ms = 1 min

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        HttpServletRequest httpServletRequest = (HttpServletRequest) servletRequest;

        String clientIpAddress = httpServletRequest.getRemoteAddr();

        long currentTime = System.currentTimeMillis();

        requestCountsPerIpAddress.putIfAbsent(clientIpAddress, new ArrayList<>());
        requestCountsPerIpAddress.get(clientIpAddress).add(currentTime);

        // Reset counter
        requestCountsPerIpAddress.values().forEach(clientIp -> clientIp.removeIf(time -> isTimeExpired(currentTime, time)));

        if (requestCountsPerIpAddress.get(clientIpAddress).size() > RATE_LIMIT) {
            throw new RateLimitingException("Too many requests, please try again later");
        }

        filterChain.doFilter(servletRequest, servletResponse);
    }

    private boolean isTimeExpired(final long currentTime, final long timeToCheck) {
        return currentTime - timeToCheck > RATE_DURATION;
    }

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
        Filter.super.init(filterConfig);
    }

    @Override
    public void destroy() {
        Filter.super.destroy();
    }

    private static class ClientRequestData {
        long startTime;
        AtomicInteger requestCount;

        ClientRequestData(long startTime) {
            this.startTime = startTime;
            this.requestCount = new AtomicInteger(0);
        }
    }
}
