declare module android {
  export module app {
    export class Activity {
      onCreate(bundle: android.os.Bundle);
    }
  }
  export module os {
    export class Bundle { }
  }
}

@JavaProxy("com.tns.NativeScriptActivity")
class MyActivity extends android.app.Activity {
  onCreate(bundle: android.os.Bundle) {
    super.onCreate(bundle);
  }
}
