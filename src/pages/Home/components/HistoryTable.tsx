import { Measurement } from "api/measurements";
import Button from "components/Button";
import { HappinessLevels } from "components/HappinessInput";
import useCounter from "hooks/useCounter";
import { useDeleteMeasurement, useEditMeasurement } from "hooks/useMeasurement";
import React, { useState } from "react";

const NUMBER_OF_ITEMS_PER_PAGE = 5;

function paginate<T>(array: T[], pageSize: number, page: number) {
  return array.slice((page - 1) * pageSize, page * pageSize);
}
const formatDate = (string: string) => new Date(string).toDateString();

const happinessLevelToColor = {
  [HappinessLevels.HAPPY]: "bg-green-200",
  [HappinessLevels.NORMAL]: "bg-gray-200",
  [HappinessLevels.SAD]: "bg-red-200",
};

const HistoryTable: React.FC<{ data: Measurement[] }> = ({ data }) => {
  const [editableId, setEditableId] = useState("");
  const { mutate: edit } = useEditMeasurement();
  const { mutate: del } = useDeleteMeasurement();
  const [page, next, previous] = useCounter(1, {
    min: 1,
    max: data.length / NUMBER_OF_ITEMS_PER_PAGE,
  });
  const isEditable = (id: string | undefined) => editableId === id;
  const toggleEdit = (id?: string) => () =>
    setEditableId((old) => (old === id ? "" : id ?? ""));

  return (
    <div className="flex flex-col">
      <div className="flex justify-center p-5">
        <Button onClick={previous} className="rounded-l">
          Previous
        </Button>
        <Button disabled>{page}</Button>
        <Button onClick={next} className="rounded-r">
          Next
        </Button>
      </div>
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow-lg overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Weight (kg)
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Happiness Level
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    <span>Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {paginate(data, NUMBER_OF_ITEMS_PER_PAGE, page).map((row) => (
                  <tr key={row._id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {formatDate(row.trackingDate)}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap">
                      <input
                        onDoubleClick={toggleEdit(row._id)}
                        readOnly={!isEditable(row._id)}
                        value={row.weight}
                        onChange={(event) => {
                          edit({
                            id: row._id ?? "",
                            body: {
                              ...row,
                              weight: Number(event.target.value),
                            },
                          });
                        }}
                        className={`rounded-lg bg-white focus:outline-none px-6 py-4 ${
                          isEditable(row._id) ? "shadow-lg bg-gray-50" : ""
                        }`}
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 capitalize inline-flex text-xs leading-5 font-semibold rounded-full ${
                          happinessLevelToColor[row.happinessLevel]
                        } text-gray-800`}
                      >
                        {row.happinessLevel}
                      </span>
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium flex justify-items-start">
                      <Button
                        onClick={toggleEdit(row._id)}
                        className={` rounded-lg text-indigo-600 hover:text-indigo-900 ${
                          isEditable(row._id)
                            ? " text-green-600 bg-green-200"
                            : ""
                        }`}
                      >
                        {isEditable(row._id) ? "Done" : "Edit"}
                      </Button>
                      <Button
                        onClick={() => del(row._id)}
                        className={`mx-3 rounded-lg bg-red-200 text-red-600 hover:text-red-900 `}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
                {/* More people... */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryTable;
