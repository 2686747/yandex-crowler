package com.vmk.yandex.crowler;

import static org.junit.Assert.assertNotNull;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.Test;

public class CrowlerTest {
	private static Crowler crowler;
	@BeforeClass
	public static void  setUp() {
		crowler  = new Crowler();
        String query = "how build crowler";
        crowler.setQuery(query);
        int pageCount = 10;
        crowler.setPageCount(pageCount);
        
	}
	
	@AfterClass
	public static void finish() {
		crowler.close();
	}
    @Test
     public void loadPagesWithCookies() {
        crowler.loadPages(page -> {
        	System.out.println("page.length:" + page.length());
        	assertNotNull(page);
        });
        
    }
 
}
