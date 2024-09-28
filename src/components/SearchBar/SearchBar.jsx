import { Formik, Form, Field } from "formik";
import { toast, ToastContainer } from "react-toastify";
import styles from "./SearchBar.module.css";

const SearchBar = ({ setQuery }) => {
  const initialValues = {
    query: "",
  };

  const handleSubmit = (values) => {
    const q = values.query.trim();

    if (q === "") {
      toast.info(`Don't be shy, tell me what you want to find 😊`, {
        position: "top-center",
        theme: "colored",
      });
      return;
    }

    setQuery(q);
  };

  return (
    <header className={styles.header}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={styles.form}>
          <Field
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            className={styles.input}
          />
          <button className={styles.button} type="submit">
            Search
          </button>
        </Form>
      </Formik>
      <ToastContainer style={{ width: "420px" }} />
    </header>
  );
};

export default SearchBar;
