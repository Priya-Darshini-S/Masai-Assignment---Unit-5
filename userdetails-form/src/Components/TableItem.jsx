

export const TableItem = ({username, age, address, salary, martialStatus, department, files, deleteUser }) => {
    return (
        <div className="mainList">
            <table>
                <tbody>
                    <tr>
                        <td>{files}</td>
                        <td>{username}</td>
                        <td>{age}</td>
                        <td>{address}</td>
                        <td>{department}</td>
                        <td>{salary}</td>
                        <td>{martialStatus}</td>
                        
                        <td>
                            <button>Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};