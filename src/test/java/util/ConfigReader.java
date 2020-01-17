package util;

import org.apache.http.impl.auth.SpnegoTokenGenerator;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

public class ConfigReader {

    private String url;
    private String chromeDriverPath;

    public ConfigReader() {

        Properties prop = new Properties();
        InputStream input = null;

        //Congigreader ve properties class baglantilarini yapabilmek icin fileInputStream class tan yararlanacagiz
        //Ama FileInputException oiexception throw eder o nedenle try-catch le handle edilmesi gerekir

        try {

            input = new FileInputStream("config.properties");
            //load properties file
            prop.load(input);

            //get the property value and print it out
            this.url = prop.getProperty("url");
            this.chromeDriverPath = prop.getProperty("chrome_driver_path");


        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            if (input != null) {
                try {
                    input.close();
                } catch (IOException e) {

                    e.printStackTrace();
                }
            }


        }

    }
    public String getUrl() {
        return url;

    }

public String getChromeDriverPath(){

     return chromeDriverPath;
        }


}

