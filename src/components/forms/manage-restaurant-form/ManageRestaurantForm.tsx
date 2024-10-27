import { Form } from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import DetailsSection from './DetailsSection';
import { Separator } from '@/components/ui/separator';
import CuisineSection from './CuisineSection';
import MenuSection from './MenuSection';
import ImageSection from './ImageSection';
import LoadingButton from '@/components/LoadingButton';
import { Button } from '@/components/ui/button';

const formSchema = z.object({
  restaurantName: z.string().min(1, 'Restaurant Name is required'),
  city: z.string().min(1, 'City is required'),
  country: z.string().min(1, 'Country is required'),
  deliveryPrice: z.coerce.number({
    required_error: 'Delivery Price is required',
    invalid_type_error: 'Delivery Price must be a number',
  }),
  estimatedDeliveryTime: z.coerce.number({
    required_error: 'Estimated Delivery Time is required',
    invalid_type_error: 'Estimated Delivery Time must be a number',
  }),
  cuisines: z.array(z.string()).nonempty({
    message: 'please select at least one cuisine',
  }),
  menuItems: z.array(
    z.object({
      name: z.string().min(1, 'name is required'),
      price: z.coerce.number().min(1, 'price is required'),
    })
  ),
  imageFile: z.instanceof(File, { message: 'please upload an image' }),
});

type RestaurantFormData = z.infer<typeof formSchema>;

type Props = {
  onSave: (restaurantFormData: FormData) => void;
  isLoading: boolean;
};

const ManageRestaurantForm = ({ onSave, isLoading }: Props) => {
  const form = useForm<RestaurantFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cuisines: [],
      menuItems: [{ name: '', price: 0 }],
    },
  });

  const onSubmit = (formDataJson: RestaurantFormData) => {
    // Todo - convert form data json to a new FormData object
    const formData = new FormData();
    formData.append('restaurantName', formDataJson.restaurantName);
    formData.append('city', formDataJson.city);
    formData.append('country', formDataJson.country);
    formData.append(
      'deliveryPrice',
      (formDataJson.deliveryPrice * 100).toString()
    );
    formData.append(
      'estimatedDeliveryTime',
      formDataJson.estimatedDeliveryTime.toString()
    );
    formDataJson.cuisines.forEach((cuisine, index) => {
      formData.append(`cuisines[${index}]`, cuisine);
    });
    formDataJson.menuItems.forEach((menuItem, index) => {
      formData.append(`menuItems[${index}][name]`, menuItem.name);
      formData.append(
        `menuItems[${index}][price]`,
        (menuItem.price * 100).toString()
      );
    });
    formData.append('imageFile', formDataJson.imageFile);
    onSave(formData);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 bg-gray-50 rounded-lg md:p-10"
      >
        <DetailsSection />
        <Separator />
        <CuisineSection />
        <Separator />
        <MenuSection />
        <Separator />
        <ImageSection />
        {isLoading ? (
          <LoadingButton />
        ) : (
          <Button type="submit"> Submit </Button>
        )}
      </form>
    </Form>
  );
};
export default ManageRestaurantForm;
