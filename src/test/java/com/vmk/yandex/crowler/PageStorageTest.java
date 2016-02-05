package com.vmk.yandex.crowler;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.nio.file.Files;
import java.nio.file.Path;

import org.junit.Test;

public class PageStorageTest {

	@Test
	public void testSave() throws UnsupportedEncodingException, IOException {
		String content = "Simple content with разными шрифтами";
		String name = "test";
		Path resultPath = PageStorage.save(content, name);
	 
		assertTrue("File not existed", resultPath.toFile().exists());
		byte[] bytes = Files.readAllBytes(resultPath);
		String testString = new String(bytes, "UTF-8");
		assertEquals("Saved is not same as read", content, testString);
		Files.delete(resultPath);
		
	}

}
