@JavaProxy("com.tns.NativeScriptActivity")
class MyActivity extends android.support.v4.app.FragmentActivity {
  onCreate(bundle: android.os.Bundle) {
    console.log('onCreate');
    super.onCreate(bundle);
  }
}
