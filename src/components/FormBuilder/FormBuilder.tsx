import { FormField, FormFieldType } from "@/models/form";
import { useForm } from "react-hook-form";

const FormBuilder = ({
  fields,
  onSubmit: onSubmit = () => {},
}: {
  fields: FormField[];
  onSubmit?: (data: any) => void; // Define appropriate type for onSubmit
}) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
      {fields.map((field) => (
        <div key={field.key} className="mb-4">
          <label htmlFor={field.key} className="block text-gray-700">
            {field.label}
          </label>
          {(() => {
            switch (field.type) {
              case FormFieldType.TEXT:
              case FormFieldType.EMAIL:
              case FormFieldType.TEL:
              case FormFieldType.DATE:
              case FormFieldType.DATETIME:
              case FormFieldType.TIME:
              case FormFieldType.URL:
              case FormFieldType.PASSWORD:
                return (
                  <input
                    type={field.type}
                    {...register(field.key, {
                      required: field.required,
                      pattern: field.pattern!,
                      minLength: field.minLength,
                      maxLength: field.maxLength,
                      min: field.min,
                      max: field.max,
                    })}
                    placeholder={field.placeholder}
                    className="block w-full px-3 py-2 mt-1 text-gray-700 border rounded-md focus:outline-none focus:border-blue-500"
                  />
                );
              case FormFieldType.HIDDEN:
                return (
                  <input
                    type="hidden"
                    {...register(field.key)}
                    value={field.value as string}
                  />
                );
              case FormFieldType.NUMBER:
                return (
                  <input
                    type="number"
                    {...register(field.key, {
                      required: field.required,
                      min: field.min,
                      max: field.max,
                    })}
                    placeholder={field.placeholder}
                    className="block w-full px-3 py-2 mt-1 text-gray-700 border rounded-md focus:outline-none focus:border-blue-500"
                  />
                );
              case FormFieldType.SELECT:
                return (
                  <select
                    {...register(field.key, { required: field.required })}
                    className="block w-full px-3 py-2 mt-1 text-gray-700 border rounded-md focus:outline-none focus:border-blue-500"
                  >
                    {field.options?.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                );
              case FormFieldType.CHECKBOX:
                return (
                  <input
                    type="checkbox"
                    {...register(field.key)}
                    defaultChecked={field.checked}
                    className="mr-2 leading-tight"
                  />
                );
              case FormFieldType.RADIO:
                return (
                  <>
                    {field.options?.map((option) => (
                      <div key={option.value} className="flex items-center">
                        <input
                          type="radio"
                          id={option.value}
                          {...register(field.key, {
                            required: field.required,
                          })}
                          value={option.value}
                          defaultChecked={option.selected}
                          className="mr-2 leading-tight"
                        />
                        <label htmlFor={option.value} className="text-sm">
                          {option.label}
                        </label>
                      </div>
                    ))}
                  </>
                );
              case FormFieldType.TEXTAREA:
                return (
                  <textarea
                    {...register(field.key, { required: field.required })}
                    placeholder={field.placeholder}
                    className="block w-full px-3 py-2 mt-1 text-gray-700 border rounded-md focus:outline-none focus:border-blue-500"
                  />
                );
              default:
                return null;
            }
          })()}
          {errors[field.key] && (
            <span className="text-red-500 text-sm">
              {errors[field.key]?.type &&
                field.errorMessages?.[errors[field.key]?.type as keyof FormFieldErrorTypes]}
            </span>
          )}
        </div>
      ))}
      <button
        type="submit"
        className="block w-full px-4 py-2 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
};

export default FormBuilder;
