import UserForm from "./components/UserForm"

export default function FindWrapped(){
    return (
        <>
            <div className="bg-gray-900 min-h-screen flex justify-center items-center">
                <div className="max-w-md mx-auto p-6 bg-gray-800 rounded-lg shadow-md">
                    <UserForm />
                </div>
            </div>
        </>

    )

}