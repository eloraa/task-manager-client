import { SubmitHandler, useForm } from 'react-hook-form';
import Input from '../Input';
import Select from '../Select';
import Textarea from '../Textarea';
import { useContext, useState } from 'react';
import { AuthContext, AuthContextProps } from '../../providers/AuthProvider';
import { axios } from '../../utils/utils';
import { Toast } from '../Toast';
import { Spinner } from '../../utils/Spinner';

type Inputs = {
  title: string;
  description: string;
  date: string;
  priority: string;
};

export const TaskForm = ({ setPopup }: { setPopup: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const [isUpdating, setIsUpdating] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const { user } = useContext(AuthContext) as AuthContextProps;

  if (!user) return;
  const handleFormSubmit: SubmitHandler<Inputs> = async data => {
    setIsUpdating(true);
    try {
      const { success } = (await axios.post('/task/add', { uid: user.uid, email: user.email, ...data })).data;

      if (success) {
        Toast('Task added successfully');
        setPopup(false);
        setIsUpdating(false);
      }
    } catch (err) {
      setIsUpdating(false);
      console.log(err);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 z-10 pt-24">
      <div className="max-md:w-full bg-[#121110] text-white py-10 px-8 h-full rounded-t-2xl max-w-md mx-auto flex flex-col animate-enter [animation-duration:500ms]">
        <div className="flex items-center justify-between">
          <h1 className="font-grotesk">Create a new task</h1>
          <button onClick={() => setPopup(false)} className="transition-colors hover:bg-[#1f1f1e] p-1">
            <figure className="w-6 h-6">
              <svg viewBox="0 0 24 24" fill="none" width="32" height="32" focusable="false" aria-label="Close">
                <path d="m17.5 6.5-11 11m11 0-11-11" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" vectorEffect="non-scaling-stroke"></path>
              </svg>
            </figure>
          </button>
        </div>

        <form onSubmit={handleSubmit(handleFormSubmit)} className="flex flex-col h-full">
          <ul className="mt-10 grid gap-3 mb-4">
            <li>
              <Input
                {...register('title')}
                minLength={2}
                maxLength={200}
                placeholder="Title"
                type="text"
                className="placeholder:text-[#8e8e8e] border-[#3b3b39] focus:border-white/30"
                required
              ></Input>
            </li>
            <li>{errors.title && <h4 className="text-xs text-red-600 font-medium">{errors.title.message}</h4>}</li>
            <li>
              <Textarea {...register('description')} minLength={2} placeholder="Description" rows={4} className="placeholder:text-[#8e8e8e] border-[#3b3b39] focus:border-white/30" required></Textarea>
            </li>
            <li>{errors.description && <h4 className="text-xs text-red-600 font-medium">{errors.description.message}</h4>}</li>
            <li>
              <Input
                {...register('date')}
                placeholder="Deadline"
                type="datetime-local"
                className="placeholder:text-[#8e8e8e] border-[#3b3b39] focus:border-white/30 max-md:appearance-none"
                required
              ></Input>
            </li>
            <li>{errors.date && <h4 className="text-xs text-red-600 font-medium">{errors.date.message}</h4>}</li>
            <li>
              <Select {...register('priority')} defaultValue="priority" className="placeholder:text-[#8e8e8e] border-[#3b3b39] focus:border-white/30" required>
                <option value="priority" disabled>
                  Priority
                </option>
                <option value="low">Low</option>
                <option value="moderate">Moderate</option>
                <option value="high">High</option>
              </Select>
            </li>
            <li>{errors.priority && <h4 className="text-xs text-red-600 font-medium">{errors.priority.message}</h4>}</li>
          </ul>
          <button className="py-3 mt-4 rounded bg-blue-main text-white font-grotesk font-semibold w-full transition-transform active:scale-y-95 relative">
            <span className={`${isUpdating ? 'opacity-0' : ''}`}>Submit</span>
            {isUpdating && <Spinner></Spinner>}
          </button>
        </form>
      </div>
    </div>
  );
};
