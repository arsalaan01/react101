import { FC } from 'react';
type UserShape = {name:string,age:number,isStudent:boolean};

// interface UserShape {
//   name: string;
//   age: number;
//   isStudent: boolean;
// }   

// interface UserShape {
//   children?: React.ReactNode;
// }

const User: FC <UserShape> = ({name,age,isStudent}) => {
  return (
    <div>
        <div>
            <h3>User Component</h3>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Is Student: {isStudent ? 'Yes' : 'No'}</p>
        </div>
    </div>
  )
}

export default User