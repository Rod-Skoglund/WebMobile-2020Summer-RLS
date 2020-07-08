package com.cs5590.mobile_lesson1;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.EditText;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }

    public void login(View view){
        EditText userNameView = (EditText) findViewById(R.id.textUserName);
        EditText userPasswordView = (EditText) findViewById(R.id.textPassword);
        String UserName = userNameView.getText().toString();
        String Password = userPasswordView.getText().toString();
        if (UserName.equals("admin") && Password.equals("admin")) {
            startActivity(new Intent(this, HomeActivity.class));
        } else {
            Toast.makeText(this, "Invalid Login - Please try again", Toast.LENGTH_SHORT).show();
        }
    }
}