# IBM Business Automation Workflow Excel Reader Toolkit
#### Demonstrates reading Excel sheets using xlsx Javascript library.

## Introduction
Spreadsheets are commonly used for business and are popular with users. It is not uncommon for users to request access to some data as a spreadsheet. Several years ago, a proof of technology for using Apache POI was shared in the community (by Neil Kolban). We have revisited this in a recent project and decided it was worth providing readers with an upgraded version using the latest versions IBM Business Automation Workflow and developers the excel reader using the **xlsx** javascript library. We also  build a CV that uses the xlsx library to convert Spreadsheets and saves converted data to an IBM Business Data. This article details this updated library how it works.
## Excel Reader Toolkit
This toolkit consists of CoachView using the java code to read excel, required xlsx Javascript library and a CSHS example to use the service.

## ReadExcel CoachView
You can find the Javascript code in the GitHub repository
[inlineJavascript.js](https://github.com/Jere201086/excel-reader-tk-jmmo/blob/main/js/inlineJavascript.js), the source is also currently CoachView Inline Javascript in the toolkit so you could also just open the CV from inside the toolkit to access the source.

The CoachView Read Excel converts a base 64 encoded input String to a ByteArrayInputStream and reads the excel data. Using [XLSX Library](https://www.npmjs.com/package/xlsx) , the class iterates the workbook converting the excel input to a JSONObject tree which is later returned as JSON string.

##How it Works

![figure 1](https://github.com/Jere201086/excel-reader-tk-jmmo/blob/main/img/excelReader1.png) 

*figure 1*

On the figure 1 step 1 the user uploads the xls/xlsx files to the IBM BAW and the IBM BAW upload this files to the Content Manager, after that on step 3 the service call is executed to get the base64 encoded data from Content Manager and convert it into JSON objects using the inlineJavascript at the CoachView.

## Example

![figure 2](https://github.com/Jere201086/excel-reader-tk-jmmo/blob/main/img/excelReader.gif) 
