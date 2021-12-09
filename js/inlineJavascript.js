var _this = this;

this.setJsonVariable = function() {

    var jsonData = _this.ui.get("Output_Json1").getText();
    _this.context.options.output = jsonData;
    this.ui.get("outputData").setValue(jsonData);

}

this.getBase64String = function(documentId) {
    _this.context.options.base64DocumentId = documentId
    var service = _this.ui.get("Service_Call1");
    service.execute(documentId)
}

this.convertBase64ToExcel = function(base64) {
    var data = base64;
    var contentType = 'application/vnd.ms-excel';
    var blob1 = b64toBlob(data, contentType);
    var json = excelToJson(blob1);
}

function b64toBlob(b64Data, contentType, sliceSize) {
    contentType = contentType || '';
    sliceSize = sliceSize || 512;

    var byteCharacters = atob(b64Data);
    var byteArrays = [];

    for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        var slice = byteCharacters.slice(offset, offset + sliceSize);

        var byteNumbers = new Array(slice.length);
        for (var i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }

        var byteArray = new Uint8Array(byteNumbers);

        byteArrays.push(byteArray);
    }

    var blob = new Blob(byteArrays, { type: contentType });
    return blob;
};

function excelToJson(selectedFile) {

    if (selectedFile) {
        var fileReader = new FileReader();
        fileReader.readAsBinaryString(selectedFile);
        fileReader.onload = function(event) {
            var data = event.target.result;
            var workbook = XLSX.read(data, { type: "binary" });
            workbook.SheetNames.forEach(function(sheet) {
                var jsonObject = XLSX.utils.sheet_to_json(workbook.Sheets[sheet]);
                _this.ui.get("Output_Json1").setText(JSON.stringify(jsonObject, undefined, 4));
                //                _this.ui.get("Output_Json1").setVisible(true,true);
                _this.ui.get("success_file_upload").setVisible(true, true);
                _this.ui.get("Button_Save").setEnabled(true);
                setTimeout(function() { _this.ui.get("success_file_upload").setVisible(false, true); }, 3000);
                //                return jsonObject;
            });
        }
    }
};