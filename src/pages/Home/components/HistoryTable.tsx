import { Measurement } from "api/measurements";
import Button from "components/Button";
import { HappinessLevels } from "components/HappinessInput";
import useCounter from "hooks/useCounter";
import React from "react";

const formatDate = (string: string) => new Date(string).toDateString();
const happinessLevelToColor = {
  [HappinessLevels.HAPPY]: "bg-green-200",
  [HappinessLevels.NORMAL]: "bg-gray-200",
  [HappinessLevels.SAD]: "bg-red-200",
};

const HistoryTable: React.FC<{ data: Measurement[] }> = ({ data }) => {
  const [page, next, previous] = useCounter(1, {
    min: 1,
    max: data.length / 10,
  });

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
                {data.map((row) => (
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
                    <td className="px-6 py-4 whitespace-nowrap">
                      {row.weight}
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

                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <Button className="text-indigo-600 hover:text-indigo-900">
                        Edit
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
