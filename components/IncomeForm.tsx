import React, { useRef, useState } from "react";

const IncomeForm = ({ income, setIncome }: any) => {
  const [values, setValues] = useState({
    desc: "",
    price: "",
    date: "",
  });
  const desc = useRef<HTMLInputElement | null>(null);
  const date = useRef(null);
  const price = useRef<HTMLInputElement | null>(null);

  const handleChange = (event: any) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  const AddIncome = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const { date, price, desc } = values;
    let d = date.split("-").map((e) => parseInt(e));
    let newD = new Date(d[0], d[1] - 1, d[2]);

    const obj = {
      desc: desc,
      price: price,
      date: newD.toISOString(),
    };

    fetch("/api/add-income-item", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    })
      .then((res) => res.json())
      .then(() => {
        setIncome([...income, obj]);

        setValues({
          desc: "",
          price: "",
          date: "",
        });
      })
      .catch(() => alert("An error occured"));
  };

  return (
    <form className="income-form" onSubmit={AddIncome}>
      <div className="form-inner ">
        <input
          type="text"
          name="desc"
          id="desc"
          placeholder="Income description..."
          value={values.desc}
          onChange={handleChange}
        />
        <input
          className="text-xl"
          type="number"
          name="price"
          id="price"
          placeholder="Price"
          value={values.price}
          onChange={handleChange}
        />
        <input
          type="date"
          name="date"
          id="date"
          placeholder="Income date"
          value={values.date}
          onChange={handleChange}
        />
        <input className="bg-[#FFCE00]" type="submit" value="Add Income" />
      </div>
    </form>
  );
};

export default IncomeForm;
