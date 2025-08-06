package com.lynx.shopay

import android.app.Activity
import android.content.Intent
import android.os.Bundle
import com.lynx.tasm.LynxView
import com.lynx.tasm.LynxViewBuilder

class MainActivity : Activity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        val lynxView: LynxView = buildLynxView()
        setContentView(lynxView)

        val uri = "main.lynx.bundle";
        lynxView.renderTemplateUrl(uri, "")

        // open switch page
        // startActivity(Intent(this, SwitchActivity::class.java));
    }

    private fun buildLynxView(): LynxView {
        val viewBuilder: LynxViewBuilder = LynxViewBuilder()
        viewBuilder.setTemplateProvider(DemoTemplateProvider(this))
        return viewBuilder.build(this)
    }
}