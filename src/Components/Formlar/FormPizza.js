import React, { useState, useEffect } from "react";
import axios from "axios";
import * as Yup from "yup";

const formSchema = Yup.object().shape({
  isim: Yup.string()
    .required("İsim alanı zorunludur")
    .min(2, "İsim en az 2 karakter olmalı"),
  boyut: Yup.string().required("Lütfen bir boyut seçiniz"),
  malzeme1: Yup.boolean().oneOf([true, false]),
  malzeme2: Yup.boolean().oneOf([true, false]),
  malzeme3: Yup.boolean().oneOf([true, false]),
  malzeme4: Yup.boolean().oneOf([true, false]),
  ozel: Yup.string(),
});

const initialState = {
  isim: "",
  boyut: "",
  malzeme1: false,
  malzeme2: false,
  malzeme3: false,
  malzeme4: false,
  ozel: "",
};

const mevcutSiparisler = [
  {
    isim: "Margarita",
    boyut: "buyuk",
    malzeme1: true,
    malzeme2: false,
    malzeme3: true,
    malzeme4: false,
    ozel: "Ranch sos",
  },
];

export default function FormPizza() {
  //datayı kontrol etmemizi sağlıyor
  const [formData, setFormData] = useState(initialState);
  //yeni siparişleri eklemeye yarıyor
  const [siparisler, setSiparisler] = useState(mevcutSiparisler);
  //hataları tutmamıza yarıyor. hatalar da obje olarak tutulur çünkü birden fazla hata alabiliriz
  const [errors, setErrors] = useState(initialState);

  function checkFormErrors(name, value) {
    Yup.reach(formSchema, name)
      .validate(value)
      .then(() => {
        setErrors({
          ...errors,
          [name]: "",
        });
      })
      .catch((err) => {
        setErrors({
          ...errors,
          [name]: err.errors[0],
        });
      });
  }

  function handleChange(event) {
    const { name, value, checked, type } = event.target;
    checkFormErrors(name, type === "checkbox" ? checked : value);
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  }

  function handleClickReset() {
    setFormData(initialState);
  }

  function handleClickSubmit(e) {
    e.preventDefault();
    console.log("submitted!");
    axios
      .post("https://reqres.in/api/orders", formData)
      .then((res) => {
        //buradaki data içerde tanımladığım değil
        //data yazınca sadece istediğin değişkenleri veriyor
        let yeniSiparis = [...siparisler, res.data];
        setSiparisler(yeniSiparis);
        console.log("Siparisler");
        console.log(yeniSiparis);
      })
      .catch((err) => console.log(err.response));
  }

  const [buttonDisabledMi, setButtonDisabledMi] = useState(true);

  useEffect(() => {
    formSchema.isValid(formData).then((valid) => setButtonDisabledMi(!valid));
  }, [formData]);

  useEffect(() => {
    console.log("formData");
    console.log(formData);
    console.log("errors");
    console.log(errors);
  }, [siparisler]);

  return (
    <div className="pizza-form-arka">
      <h4>Pizza Sipariş Formu</h4>

      <form id="pizza-form" className="pizza-form" onSubmit={handleClickSubmit}>
        <div className="inputlar">
          <label htmlFor="name-input">Pizza Seçimi </label>
          <input
            type="text"
            onChange={handleChange}
            value={formData.isim}
            id="name-input"
            name="isim"
            data-cy="isimalani"
          />
        </div>
        {errors.isim !== "" && <div className="uyarilar">{errors.isim}</div>}

        <div className="inputlar">
          <label htmlFor="size-dropdown">Boyut Seçimi: </label>
          <select
            onChange={handleChange}
            value={formData.boyut}
            id="size-dropdown"
            name="boyut"
            data-cy="boyutalani"
          >
            <option value="">Lütfen seçiniz</option>
            <option value="buyuk">Büyük</option>
            <option value="orta">Orta</option>
            <option value="kucuk">Küçük</option>
          </select>
        </div>
        {errors.boyut !== "" && <div className="uyarilar">{errors.boyut}</div>}
        <div className="inputlar">
          <label>Malzeme Seçimi: </label>
          <label className="malzeme-block">
            <input
              className="checkbox-tiki"
              type="checkbox"
              onChange={handleChange}
              checked={formData.malzeme1}
              name="malzeme1"
              data-cy="malzeme1alani"
            />
            Mısır
          </label>
          <label className="malzeme-block">
            <input
              className="checkbox-tiki"
              type="checkbox"
              onChange={handleChange}
              checked={formData.malzeme2}
              name="malzeme2"
              data-cy="malzeme2alani"
            />
            Siyah zeytin
          </label>
          <label className="malzeme-block">
            <input
              className="checkbox-tiki"
              type="checkbox"
              onChange={handleChange}
              checked={formData.malzeme3}
              name="malzeme3"
              data-cy="malzeme3alani"
            />
            Jalapeno biber
          </label>
          <label className="malzeme-block">
            <input
              className="checkbox-tiki"
              type="checkbox"
              onChange={handleChange}
              checked={formData.malzeme4}
              name="malzeme4"
              data-cy="malzeme4alani"
            />
            Sosis
          </label>

          {formData.malzeme1 +
            formData.malzeme2 +
            formData.malzeme3 +
            formData.malzeme4 >=
            3 && (
            <div className="uyarilar">3 malzemeden sonra ek ücret alınır </div>
          )}
        </div>

        <div className="inputlar">
          <label htmlFor="special-text">Özel istek: </label>
          <input
            type="text"
            onChange={handleChange}
            value={formData.ozel}
            id="special-text"
            name="ozel"
            data-cy="ozelalani"
          />
        </div>
        {formData.ozel !== "" && (
          <div className="uyarilar">Özel isteklerden ek ücret alınır</div>
        )}
        <br />
        <div className="buton-divi">
          <button
            type="submit"
            id="order-button"
            disabled={buttonDisabledMi}
            data-cy="buton"
            className="form-buton"
          >
            Siparişlere Ekle
          </button>
          <br />
          <button
            type="button"
            className="form-buton"
            onClick={handleClickReset}
          >
            Formu temizle
          </button>
        </div>
      </form>
    </div>
  );
}
