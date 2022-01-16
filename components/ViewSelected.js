import { useEffect , useState } from "react"
import getAllSelected from "../Firebase/GetSelected"
import { Table , Tag , Space , Button} from "antd"
import unselectFirestore from "../Firebase/Unselect"
export default function ViewSelected() {
    const [docs, setDocs] = useState([])
    const [loading, setLoading] = useState(true)
    const columns = [
        
        {
          title: 'Email',
          dataIndex: 'uid',
          key: 'uid',
        },
        {
          title: 'Departments Selected',
          key: 'selected',
          dataIndex: 'selectedDepartments',
          render: departmentsSelected => (
            <>
              {departmentsSelected.map((tag,index) => {
                return (
                  <Tag key={index}>
                    {tag.toUpperCase()}
                  </Tag>
                );
              })}
            </>
          ),
        },
        {
            title: 'Remove',
            key: 'remove',
            render: (text, record) => (
                <Space size="middle">
                    <a onClick={
                        () => {
                            unselectFirestore(record.uid);
                            getData();
                        }
                    }>Remove</a>
                </Space>
            ),
        }
      ];
      const getData = async () => {
        setLoading(true);
        const Myids = await getAllSelected();
        setDocs(Myids);
        setLoading(false);
    }
    useEffect(() => {
        getData();
    }, [])
    return (
        <div>
            {
                loading ? <div>Loading...</div> :
                <>
                     <h1>
                            Selected People
                     </h1>
                     <Table columns={columns} dataSource={docs} />
                     <Button onClick={getData}>Refresh</Button>
                </>
            }            
        </div>
    )
}
