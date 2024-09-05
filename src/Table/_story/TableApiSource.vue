<script lang="ts" setup>
import { computed } from 'vue'
import { usePagination } from 'vue-request'
import type { TableProps } from '../'
import { Table } from '../'

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    sorter: true,
    width: '20%',
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    filters: [
      { text: 'Male', value: 'male' },
      { text: 'Female', value: 'female' },
    ],
    width: '20%',
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
]

interface APIParams {
  page?: number
  pageSize?: number
}
interface APIResult {
  results: {
    gender: 'female' | 'male'
    name: string
    email: string
  }[]
  page: number
  pageSize: number
}

function queryData(params: APIParams): Promise<APIResult> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        results: [...Array.from({ length: 10 })].map((_, index) => ({
          id: index,
          gender: (index % 2 === 0 ? 'male' : 'female'),
          name: `name_${index}_${params.page}`,
          email: `${index}_${params.page}@email.com`,
        })),
        page: params.page || 1,
        pageSize: params.pageSize || 10,
      })
    }, 500)
  })
}

const {
  data,
  run,
  loading,
  current,
  pageSize,
} = usePagination(queryData, {
  pagination: {
    currentKey: 'page',
    pageSizeKey: 'pageSize',
  },
})

const dataSource = computed(() => data.value?.results)

const pagination = computed(() => ({
  total: 200,
  current: current.value,
  pageSize: pageSize.value,
}))

const handleTableChange: TableProps['onChange'] = (
  pag: { pageSize?: number, current?: number },
) => {
  run({
    page: pag.current,
    pageSize: pag.pageSize,
  })
}
</script>

<template>
  <Table
    :columns="columns"
    :row-key="record => record.id"
    :data-source="dataSource"
    :pagination="pagination"
    :loading="loading"
    @change="handleTableChange"
  />
</template>
