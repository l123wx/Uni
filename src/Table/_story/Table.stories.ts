import type { StoryObj } from '@storybook/vue3'
import { DownOutlined, SmileOutlined } from '@ant-design/icons-vue'
import { Divider, Tag } from 'ant-design-vue'
import { Table } from '../'
import TableApiSourceCom from './TableApiSource.vue'

export default {
  title: 'Table',
}

export const TableBasic: StoryObj = {
  render: () => ({
    template: `
      <Table :columns="columns" :data-source="data">
        <template #headerCell="{ column }">
          <template v-if="column.key === 'name'">
            <span>
              <smile-outlined />
              Name
            </span>
          </template>
        </template>

        <template #bodyCell="{ column, record }">
          <template v-if="column.key === 'name'">
            <a>
              {{ record.name }}
            </a>
          </template>
          <template v-else-if="column.key === 'tags'">
            <span>
              <Tag
                v-for="tag in record.tags"
                :key="tag"
                :color="tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'"
              >
                {{ tag.toUpperCase() }}
              </Tag>
            </span>
          </template>
          <template v-else-if="column.key === 'action'">
            <span>
              <a>Invite 一 {{ record.name }}</a>
              <Divider type="vertical" />
              <a>Delete</a>
              <Divider type="vertical" />
              <a class="ant-dropdown-link">
                More actions
                <down-outlined />
              </a>
            </span>
          </template>
        </template>
      </Table>
    `,
    components: {
      Table,
      DownOutlined,
      SmileOutlined,
      Tag,
      Divider,
    },
    setup() {
      const columns = [
        {
          name: 'Name',
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        },
        {
          title: 'Tags',
          key: 'tags',
          dataIndex: 'tags',
        },
        {
          title: 'Action',
          key: 'action',
        },
      ]

      const data = [
        {
          key: '1',
          name: 'John Brown',
          age: 32,
          address: 'New York No. 1 Lake Park',
          tags: ['nice', 'developer'],
        },
        {
          key: '2',
          name: 'Jim Green',
          age: 42,
          address: 'London No. 1 Lake Park',
          tags: ['loser'],
        },
        {
          key: '3',
          name: 'Joe Black',
          age: 32,
          address: 'Sidney No. 1 Lake Park',
          tags: ['cool', 'teacher'],
        },
      ]

      return { columns, data }
    },
  }),
}

export const TableApiSource = {
  render: () => ({
    template: `<TableApiSourceCom />`,
    components: {
      TableApiSourceCom,
    },
  }),
}
