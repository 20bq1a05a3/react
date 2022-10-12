import React from "react";

function Hook3() {
  const items = [
    { sid: "1", name: "harshitha", course: "cse" },
    { sid: "2", name: "sumana", course: "IT" },
    { sid: "3", name: "jessica", course: "ECE" },
    { sid: "4", name: "advay", course: "EEE" },
    { sid: "5", name: "Manasa", course: "MECH" },
    { sid: "6", name: "Vijay", course: "CE" }
  ];
  return (
    <div>
      <table border="2" cellpadding="5px">
        {items.map((item) => (
          <tr key={item.id}>
            <td>{item.sid}</td>
            <td> {item.name} </td>
            <td> {item.course} </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Hook3;
