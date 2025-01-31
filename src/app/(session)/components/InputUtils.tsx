
import { Children, useContext, useState } from "react";
import { BiSolidShow } from "react-icons/bi";
import { BiSolidHide } from "react-icons/bi";
import { PrimaryActionButton } from "./Buttons";
import { RegesterFormContext } from "../register/page";

interface InputSectionProps {
  name: string;
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

export const InputSection = ({ name, label,type, value, onChange, required }: InputSectionProps) => {
  return (
    <div className="flex flex-col mb-5 w-full">
      <label htmlFor={name} className="text-white font-medium mb-2">{label}</label>
      <input
        className="h-12 pl-3 bg-transparent border-2 rounded-xl border-color-gray focus:border-color-primary input-cursor-primar caret-color-primary text-color-gray"
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};
  
export const InputCheckBox = ({ label }: { label: string }) => {
    return (
      <div className="relative flex items-center pb-4 my-4">
        <input
          type="checkbox"
          id="privacyPolicy"
          name="privacyPolicy"
          className="appearance-none w-5 h-5 border-2 rounded-full bg-transparent hover:cursor-pointer checked:bg-color-primary checked:border-0"
        />
        <label htmlFor="privacyPolicy" className="text-color-primary ml-2 cursor-pointer">{label}</label>
      </div>
    );
  };

export const InputWithIcons = ({children, type, name}:{children:React.ReactNode, type:string, name:string}) => {
  return (
    <div className="flex flex-col w-full">
      <label htmlFor={name}></label>
      {/* <label htmlFor={name} className="text-white mb-2 font-medium w-full">{name}</label> */}
      <div className="relative mb-5 ">
        <input
          className="h-12 pr-10 w-full pl-3 bg-transparent border-2 rounded-xl border-color-gray focus:border-color-primary input-cursor-primar caret-color-primary text-color-gray"
          type={type}
          id={name}
          name={name}
        />
        <div className="absolute right-1 top-0 bottom-0 px-3 py-1 rounded flex flex-col justify-center" >
          {children}
          {/* <BiSolidHide className="text-gray-400" size="24px"/> */}
        </div>
      </div>
    </div>
  );
}

interface PasswordInputSectionProps {
  name: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

export const PasswordInputSection = ({ name, value, label, onChange, required }: PasswordInputSectionProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className="flex flex-col w-full">
      <label htmlFor={name} className="text-white font-medium mb-2">{label}</label>
      <div className="relative mb-5 ">
        <input
          className="h-12 pr-10 w-full pl-3 bg-transparent border-2 rounded-xl border-color-gray focus:border-color-primary input-cursor-primar caret-color-primary text-color-gray"
          type={isPasswordVisible ? 'text' : 'password'}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute right-0 top-0 bottom-0 px-3 py-1 rounded"
        >
          {isPasswordVisible ? <BiSolidShow className="text-gray-400" size="24px"/> : <BiSolidHide className="text-gray-400" size="24px"/> }
        </button>
      </div>
    </div>
  );
};
  
export const FormTitle = ({title}:{title:string})=>{
    return (
      <div className="flex justify-between items-center w-full font-bold my-14">
        <div className="border-t-2 w-1/3 border-color-white"></div>
        <p className=" text-color-primary font-bold">{title}</p>
      </div>
    )
}

interface FormContainerProps {
  children: React.ReactNode;
  onFinish: (value: object) => void;
  action: string;
}

export const FormContainer: React.FC<FormContainerProps> = ({ children, onFinish, action }) => {
  const handleSubmit = (event: React.FormEvent) => {
      event.preventDefault();
      const formData = new FormData(event.target as HTMLFormElement);
      const formValues = Object.fromEntries(formData.entries());
      onFinish(formValues);
  };

  return (
      // <form onSubmit={handleSubmit}>
      <form className='flex flex-col max-w-md w-full' onSubmit={handleSubmit}>
          {children}
          <PrimaryActionButton message={action}/>
          {/* <button className="w-full bg-color-primary h-12 rounded-xl mt-4" type="submit"> Continue </button> */}
          {/* <button type="submit">{action}</button> */}
      </form>
  );
};