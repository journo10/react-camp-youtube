import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Button } from "semantic-ui-react";
import KodlamaIoTextInput from "../utilities/customFormControls/KodlamaIoTextInput";

const ProductAdd = () => {
  const initialValues = {
    name: "",
    price: 0,
    unitsInStock: 0,
    description: "",
    imageUrl: "",
  };

  const schema = Yup.object({
    name: Yup.string().required("Ürün adı zorunlu"),
    price: Yup.number().required("Ürün fiyatı zorunlu"),
    unitsInStock: Yup.number().required("Ürün adeti zorunlu"),
    description: Yup.string().required("Ürün açıklaması zorunlu"),
    imageUrl: Yup.string().required("Ürün resmi zorunlu"),
  });
  return (
    <div style={{ marginTop: "1em" }}>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form className="ui form">
          <KodlamaIoTextInput name="name" placeholder="Ürün adı" />
          <KodlamaIoTextInput name="price" placeholder="Ürün fiyatı" />
          <KodlamaIoTextInput name="unitsInStock" placeholder="Ürün adeti" />
          <KodlamaIoTextInput name="description"placeholder="Ürün açıklaması" />
          <KodlamaIoTextInput name="imageUrl" placeholder="Ürün resmi" />
          <Button color="green" type="submit">
            Ekle
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default ProductAdd;
