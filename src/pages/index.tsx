import FormBuilder from "@/components/FormBuilder/FormBuilder";
import { FormField, FormFieldType } from "@/models/form";
export default function Home() {
  

  const fields: FormField[] = [
    // Text input field
    {
      type: FormFieldType.TEXT,
      label: "Text Field",
      key: "text",
      placeholder: "Enter text",
      required: true,
      errorMessages: {
        required: "Text is required",
      },
    },
  
    // Email input field
    {
      type: FormFieldType.EMAIL,
      label: "Email Field",
      key: "email",
      placeholder: "Enter email",
      required: true,
      pattern: /\S+@\S+\.\S+/,
      errorMessages: {
        required: "Email is required",
        pattern: "Invalid email address",
      },
    },
  
    // Telephone input field
    {
      type: FormFieldType.TEL,
      label: "Telephone Field",
      key: "tel",
      placeholder: "Enter telephone number",
      required: true,
      errorMessages: {
        required: "Telephone number is required",
      },
    },
  
    // Date input field
    {
      type: FormFieldType.DATE,
      label: "Date Field",
      key: "date",
      required: true,
      errorMessages: {
        required: "Date is required",
      },
    },
  
    // Datetime-local input field
    {
      type: FormFieldType.DATETIME,
      label: "Datetime-local Field",
      key: "datetime",
      required: true,
      errorMessages: {
        required: "Datetime is required",
      },
    },
  
    // Time input field
    {
      type: FormFieldType.TIME,
      label: "Time Field",
      key: "time",
      required: true,
      errorMessages: {
        required: "Time is required",
      },
    },
  
    // URL input field
    {
      type: FormFieldType.URL,
      label: "URL Field",
      key: "url",
      placeholder: "Enter URL",
      required: true,
      errorMessages: {
        required: "URL is required",
      },
    },
  
    // Password input field
    {
      type: FormFieldType.PASSWORD,
      label: "Password Field",
      key: "password",
      placeholder: "Enter password",
      required: true,
      errorMessages: {
        required: "Password is required",
      },
    },
  
    // Hidden input field
    {
      label: "Hidden field",
      type: FormFieldType.HIDDEN,
      key: "hidden",
      value: "hidden-value",
    },
  
    // Number input field
    {
      type: FormFieldType.NUMBER,
      label: "Number Field",
      key: "number",
      placeholder: "Enter number",
      required: true,
      min: 0,
      max: 100,
      errorMessages: {
        required: "Number is required",
        min: "Number must be greater than or equal to 0",
        max: "Number must be less than or equal to 100",
      },
    },
  
    // Select dropdown field
    {
      type: FormFieldType.SELECT,
      label: "Select Field",
      key: "select",
      options: [
        { label: "Option 1", value: "option1" },
        { label: "Option 2", value: "option2" },
        { label: "Option 3", value: "option3" },
      ],
      required: true,
      errorMessages: {
        required: "Please select an option",
      },
    },
  
    // Checkbox field
    {
      type: FormFieldType.CHECKBOX,
      label: "Checkbox Field",
      key: "checkbox",
      checked: false,
      errorMessages: {
        required: "Checkbox must be checked",
      },
    },
  
    // Radio button field
    {
      type: FormFieldType.RADIO,
      label: "Radio Field",
      key: "radio",
      options: [
        { label: "Option A", value: "A" },
        { label: "Option B", value: "B" },
        { label: "Option C", value: "C" },
      ],
      required: true,
      errorMessages: {
        required: "Please select an option",
      },
    },
  
    // Textarea field
    {
      type: FormFieldType.TEXTAREA,
      label: "Textarea Field",
      key: "textarea",
      placeholder: "Enter text",
      required: true,
      errorMessages: {
        required: "Text is required",
      },
    },
  ];
  
   
  const onSubmit = (value: any) => {
    console.log('value>',value)
  };

  return (
    <div>
      
      <FormBuilder fields={fields} onSubmit={onSubmit} />
    </div>
  );
}
