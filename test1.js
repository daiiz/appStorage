(function(key, value) {
    //
    // SET
    //
    appStorage({"key": key, "value": value}, "set", function() {
    	//
        // GET
        //
        appStorage({"key": "test1"}, "get", function() {
        	//
            // REMOVE
            //
            appStorage({"key": "test1"}, "remove")
        });
    });
})("test1", [{"name": ["da","iz"]}, 1, "test"]);