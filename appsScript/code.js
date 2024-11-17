function doGet(e) {
    return HtmlService.createTemplateFromFile('index').evaluate()
}


function include(filename) {
    return HtmlService.createHtmlOutputFromFile(filename).getContent();
}


// Read data from a specific sheet and return it as JSON
function readSheet(sheetName) {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
    var data = sheet.getDataRange().getValues();
    return JSON.stringify(data);  // Return data as JSON
}

// Create new rows in the sheet
function createRow(sheetName, rowData) {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
    sheet.appendRow(rowData);
    return 'Row added successfully!';
}

// Update a specific row
function updateRow(sheetName, rowIndex, updatedData) {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
    sheet.getRange(rowIndex, 1, 1, updatedData.length).setValues([updatedData]);
    return 'Row updated successfully!';
}

// Delete a row from the sheet
function deleteRow(sheetName, rowIndex) {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
    sheet.deleteRow(rowIndex);
    return 'Row deleted successfully!';
}
