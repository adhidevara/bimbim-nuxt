import Vue from 'vue'
import { extend } from "vee-validate";
import { required, alpha, numeric, email, confirmed } from "vee-validate/dist/rules";

extend("required", {
  ...required,
  message: "Field tidak boleh kosong"
});

extend("alpha", {
  ...alpha,
  message: "Field harus berupa huruf"
});

extend("confirmed", {
  ...confirmed,
  message: "Password harus sama"
});

extend("numeric", {
  ...numeric,
  message: "Field harus berupa angka"
});

extend("email", {
  ...email,
  message: "Email tidak sesuai"
});

extend('min', {
  validate(value, { min }) {
    return value.length >= min;
  },
  params: ['min'],
  message: (fieldName, placeholders) => {
    return `Field harus lebih dari ${placeholders.min} karakter`;
  }
});

extend('max', {
  validate(value, { max }) {
    return value.length <= max;
  },
  params: ['max'],
  message: (fieldName, placeholders) => {
    return `Field harus kurang dari ${placeholders.min} karakter`;
  }
});

extend('minmax', {
  validate(value, { min, max }) {
    return value.length >= min && value.length <= max;
  },
  params: ['min', 'max'],
  message: (fieldName, placeholders) => {
    return `Field harus lebih dari ${placeholders.min} karakter dan kurang dari ${placeholders.max} karakter`;
  }
});



