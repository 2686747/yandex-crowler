package com.vmk.yandex.crowler;

import java.util.function.Consumer;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.WebDriverWait;

/**
 * Simple crowler.
 * @author "Maksim Vakhnik"
 *
 */
public class Crowler {

	private final static String URL = "https://www.yandex.ru/";
	private static final String YANDEX_INPUT_ID = "text";
	private static final String NEXT_BTN_XPATH = "//a[@class = 'link link_ajax_yes pager__item pager__item_kind_next i-bem']";
	

	
	public boolean isCookiesEnabled() {
		return cookiesEnabled;
	}

	public void setCookiesEnabled(boolean cookiesEnabled) {
		this.cookiesEnabled = cookiesEnabled;
	}

	public int getPageCount() {
		return pageCount;
	}

	public String getQuery() {
		return query;
	}

	private boolean cookiesEnabled = true;

	private int pageCount = 10;
	private String query;
	private WebDriver driver;

	public void setQuery(String query) {
		this.query = query;
	}

	public void setPageCount(int pageCount) {
		this.pageCount = pageCount;

	}

	public void loadPages(Consumer<String> eachPageConsumer) {
		initWebDriver();
		String firstPage = loadFistPage(driver, query);
		eachPageConsumer.accept(firstPage);
		for (int i = 0; i < pageCount; i++) {
			String page = loadNextPage(driver);
			eachPageConsumer.accept(page);
		}
		

	}

	private void destroyWebDriver() {
		if (driver != null) {
			driver.close();
		}

	}

	static String loadNextPage(WebDriver driver) {
		  // wait for loading
        (new WebDriverWait(driver, 10)).until(new ExpectedCondition<Boolean>() {
            public Boolean apply(WebDriver d) {
            	try {
            		System.out.println("title:" + d.getTitle());
            	  	WebElement nextButton = getNextButton(d);
                    return nextButton != null;
            	} catch (Exception e) {
            		//do nothing
            	}
            	return false;
          
            }
        });
		WebElement input = getNextButton(driver);
		input.click();
		
		String result = driver.getPageSource();
		return result;
	}

	static WebElement getNextButton(WebDriver driver) {
		By nextButton = By.xpath(NEXT_BTN_XPATH);
		WebElement result = driver.findElement(nextButton);
		return result;
	}

	static String loadFistPage(WebDriver driver, String query) {
		driver.get(URL);
		By inputId = By.id(YANDEX_INPUT_ID);
		WebElement input = driver.findElement(inputId);
		input.sendKeys(query);
		input.submit();

		return driver.getPageSource();
	}

	private void initWebDriver() {
		if (driver == null) {
			driver = new FirefoxDriver();
		}

	}

	public void close() {
		destroyWebDriver();
	}
}