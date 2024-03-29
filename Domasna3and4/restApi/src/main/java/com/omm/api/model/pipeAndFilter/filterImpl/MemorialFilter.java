package com.omm.api.model.pipeAndFilter.filterImpl;

import com.omm.api.model.pipeAndFilter.Filter;

public class MemorialFilter implements Filter<String> {
    private static MemorialFilter instance;

    private MemorialFilter() {
    }

    public static MemorialFilter getInstance() {
            synchronized (MemorialFilter.class) {
                if (instance == null) {
                    instance = new MemorialFilter();
                }
            }
        return instance;
    }

    @Override
    public String execute(String input) {
        if (input.contains("type") || input.isEmpty())
            return "";

        String[] parts = input.split(",", -1);
        StringBuilder result = new StringBuilder();

        if (parts[1].equals("memorial")) {
            result.append(parts[0]).append(",");
            result.append(parts[1]).append(",");
            result.append(parts[2]).append(",");
            result.append(parts[3]);
        }

        return result.toString();
    }
}
