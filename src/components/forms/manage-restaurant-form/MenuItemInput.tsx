import { Button } from '@/components/ui/button';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useFormContext } from 'react-hook-form';

type Props = {
  index: number;
  removeItem: () => void;
};

const MenuItemInput = ({ index, removeItem }: Props) => {
  const { control } = useFormContext();

  return (
    <div className="flex flex-row items-end gap-2">
      <FormField
        control={control}
        name={`menuItems.${index}.name`}
        render={({ field }) => (
          <FormItem>
            <FormLabel className="flex items-center gap-1">
              Name <FormMessage />
            </FormLabel>
            <FormControl>
              <input
                {...field}
                type="text"
                placeholder="Item Name"
                className="w-1/2 p-2 border border-gray-300 rounded-lg"
              />
            </FormControl>
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name={`menuItems.${index}.price`}
        render={({ field }) => (
          <FormItem>
            <FormLabel className="flex items-center gap-1">
              Price (₹) <FormMessage />
            </FormLabel>
            <FormControl>
              <input
                {...field}
                placeholder="Price"
                className="w-1/4 p-2 border border-gray-300 rounded-lg"
              />
            </FormControl>
          </FormItem>
        )}
      />
      <Button
        type="button"
        onClick={removeItem}
        className="bg-red-500 max-h-fit"
      >
        Remove
      </Button>
    </div>
  );
};

export default MenuItemInput;
