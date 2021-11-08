package com.example;

@com.tns.JavaScriptImplementation(javaScriptFile = "app/my-activity.js")
public class MyActivity extends android.app.Activity {
   public MyActivity() {
      com.tns.Platform.initInstance(this);
   }
   public void onCreate(android.os.Bundle param_0) {
      Object[] args = new Object[1];
      args[0] = param_0;
      com.tns.Platform.callJSMethod(this, "onCreate", void.class, args);
   }
}
