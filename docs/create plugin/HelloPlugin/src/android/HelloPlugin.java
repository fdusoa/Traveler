package org.apache.cordova.hello;

import android.widget.Toast;
import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONArray;
import org.json.JSONException;

/**
 * Created by duocai on 2017/4/10.
 */

public class HelloPlugin extends CordovaPlugin {

  @Override
  public boolean execute(String action, JSONArray args, CallbackContext callbackContext)
    throws JSONException {

    if (action.equals("hello")) {
      String text = "";
      for (int i = 0; i < args.length(); i++) {
        text += args.getString(i) + "\n"; //这取决于js代码传进来的参数类型。
      }
      Toast.makeText(this.cordova.getActivity(), text, Toast.LENGTH_LONG).show();
      callbackContext.success("success: " + text);
      //callbackContext.error("dd");
      return true;
    }

    return false;
  }
}
