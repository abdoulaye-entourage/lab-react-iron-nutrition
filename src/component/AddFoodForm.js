import { Divider, Input, Button, Form } from 'antd';
import '../styles/addFoodForm.css';
import { useState } from 'react';

function AddFoodForm({ addFood }) {
  const [name, setName] = useState('');

  const [image, setImage] = useState('');

  const [calories, setCalories] = useState(0);

  const [servings, setServings] = useState(0);

  const handleSubmit = (event) => {
    console.log('foodCreated');
    event.preventDefault();

    const foodCreated = {
      name: name,
      image: image,
      calories: calories,
      servings: servings,
    };

    addFood(foodCreated);

    setName('');
    setImage('');
    setCalories(0);
    setServings(0);
  };

  return (
    <Form className="addFoodForm" onSubmit={handleSubmit}>
      <Divider>Add Food</Divider>

      <label htmlFor="name">Name</label>
      <Input
        name="name"
        type="text"
        onChange={(event) => setName(event.target.value)}
      />

      <label>Image</label>
      <Input
        name="image"
        type="text"
        onChange={(event) => setImage(event.target.value)}
      />

      <label htmlFor="calories">Calories</label>
      <Input
        name="calories"
        type="number"
        onChange={(event) => setCalories(event.target.value)}
      />

      <label htmlFor="servings">Servings</label>
      <Input
        name="servings"
        type="number"
        onChange={(event) => setServings(event.target.value)}
      />

      <Button type="primary" htmlType="submit" onClick={handleSubmit}>
        Create
      </Button>
    </Form>
  );
}
export default AddFoodForm;
