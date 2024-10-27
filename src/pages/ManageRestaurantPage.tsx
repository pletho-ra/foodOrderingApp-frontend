import { useCreateMyRestaurant } from '@/api/MyRestaurantApi';
import ManageRestaurantForm from '@/components/forms/manage-restaurant-form/ManageRestaurantForm';

const ManageRestaurantPage = () => {
  const { createMyRestaurant, isLoading } = useCreateMyRestaurant();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <ManageRestaurantForm onSave={createMyRestaurant} isLoading={isLoading} />
  );
};

export default ManageRestaurantPage;
