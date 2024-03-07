const express = require("express");
const { default: mongoose } = require("mongoose");
// const { type } = require("os");

const loginSchema = new mongoose.Schema({
    username: {
        type: String
    },

    password: {
        type: Number,
        minLength: 10
    },

});

const Login = mongoose.model("Login", loginSchema);
module.exports = Login;