import InputField from './InputField'
import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
  full_name: string
  email: string,
  address: string,
  city: string
}

function FormUser() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data)
  }
  
  return (
    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="md:col-span-5">
          <label htmlFor="full_name">Full Name</label>
          <InputField 
            id="full_name"
            {...register("full_name", {
              required: 'Please enter full name',
            })}
          />
          {errors.full_name  && (
            <p>{errors.full_name.message}</p>
          )}
        </div>
        <div className="md:col-span-5">
          <label htmlFor="email">Email Address</label>
          <InputField 
            id="email"
            {...register("email", {
              required: true,
              pattern: {
                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: 'Please enter a valid email',
              },
            })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div className="md:col-span-3">
          <label htmlFor="address">Address / Street</label>
          <InputField 
            id="address"
            {...register("address")}
          />
        </div>
        <div className="md:col-span-2">
          <label htmlFor="city">City</label>
          <InputField 
            id="city"
            {...register("city")}
          />
        </div>
        <div className="md:col-span-5 text-right">
          <div className="inline-flex items-end">
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Submit
            </button>
          </div>
        </div>
      </form>
      
    </div>
  )
}

export default FormUser