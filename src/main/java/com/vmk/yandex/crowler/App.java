package com.vmk.yandex.crowler;

import java.util.concurrent.atomic.AtomicInteger;

public class App {
	/**
	 * Will start processing first of 10 pages for requested query
	 * @param args
	 */
	public static void main(String[] args) {
		if (args.length == 0) {
			printHelp();
		} else {
			startCrowler(args[0]);
		}
	}

	private static void startCrowler(String query) {
		Crowler crowler = new Crowler();
		crowler.setQuery(query);
		final AtomicInteger count = new AtomicInteger(1);
		crowler.loadPages(page -> {
			try {
				PageStorage.save(page, count.getAndIncrement() + ".html");
			} catch (Exception e) {
				e.printStackTrace();
			}
		});
		crowler.close();
		
	}

	private static void printHelp() {
		StringBuilder sb = new StringBuilder();
		sb.append("Input query for start processing.")
			.append("\n")
			.append("Example: java -jar yandex-crowler.jar 'my search query'");
		
		System.out.println(sb);
	}
}
