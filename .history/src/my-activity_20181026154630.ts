@JavaProxy("com.tns.NativeScriptActivity")
class MyActivity extends android.app.Activity {
  constructor() {
    super();
    return global.__native(this);
  }

  onCreate(bundle: android.os.Bundle) {
    console.log('onCreate');
    super.onCreate(bundle);
  }
}
