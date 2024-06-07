import { useSelector } from "react-redux";
import { RootState } from "~/store";

const DiagnosisList = () => {
    const activePatient = useSelector((state: RootState) => state.patient.activePatient);

    if (!activePatient) {
        return <p className="text-center font-bold py-10">No active patient selected</p>;
    }

    return (
        <div className="bg-white shadow border-gray-300 rounded-[16px] mt-7 h-[345px]">
            <h2 className="text-lg font-semibold px-4 py-2">Diagnostic List</h2>
            <div className="overflow-x-auto mt-[40px] px-4 max-h-[220px]">
                <table className="min-w-full table-auto">
                    <thead className="bg-[#F6F7F8] rounded-t-[24px]">
                        <tr className="h-[48px]">
                            <th className="text-left w-1/3 font-bold text-sm pl-3 md:pl-4">Problem/Diagnosis</th>
                            <th className="text-left w-1/2 font-bold text-sm pl-3 md:pl-4">Description</th>
                            <th className="text-left w-1/5 font-bold text-sm pl-3 md:pl-4">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {activePatient.diagnostic_list.map(data => (
                            <tr key={data.name} className="h-[48px] border-b border-[#f6f7f8]">
                                <td className="font-normal text-sm w-1/3 pl-3 md:pl-4">{data.name}</td>
                                <td className="font-normal text-sm w-1/2 pl-3 md:pl-4">{data.description}</td>
                                <td className="font-normal text-sm w-1/5 pl-3 md:pl-4">{data.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default DiagnosisList;
