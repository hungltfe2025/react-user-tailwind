import FormUser from "./components/FormUser"
import TableUser from "./components/TableUser"

function App() {
  return (
    <>
      <div className="min-h-screen p-6 container max-w-screen-lg mx-auto">
        <div className="">
          <div>
            <h2 className="font-semibold text-xl text-gray-600">Responsive Form</h2>
            <p className="text-gray-500 mb-6">
              Form is mobile responsive. Give it a try.
            </p>
            <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                <div className="text-gray-600">
                  <p className="font-medium text-lg">Personal Details</p>
                  <p>Please fill out all the fields.</p>
                </div>
                <div className="lg:col-span-2">
                  <FormUser />
                </div>
              </div>
            </div>
          </div>
        </div>
      
        <div className="relative overflow-x-auto">
          <TableUser />
        </div>
      </div>
    </>
  )
}

export default App
