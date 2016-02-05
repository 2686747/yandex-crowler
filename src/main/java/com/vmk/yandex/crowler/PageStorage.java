/**
 * 
 */
package com.vmk.yandex.crowler;

import java.io.File;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;


/**
 * Saves page
 * @author "Maksim Vakhnik"
 *
 */
public class PageStorage {

	private final static String TRG_FOLDER = "pages";
	public static Path save(String content, String name)
			throws UnsupportedEncodingException, IOException {
		File file = new File(TRG_FOLDER);
		file.mkdirs();
		return Files.write(Paths.get(TRG_FOLDER, name),
				content.getBytes("UTF-8"));
		
	}

}
