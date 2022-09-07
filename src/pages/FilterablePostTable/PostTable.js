import React, { useState, useEffect } from "react";

// components
import ResponsiveWrapper from "../../components/ResponsiveWrapper";
import DataTable from "../../components/Table";
import Pagination from "../../components/Pagination";
import { postColumns } from "../../components/Table/columns/post";
import MobilePost from "./MobilePost";

// services
import { getAllPost } from "../../services/postService";

const initialState = {
  page: 1,
  limit: 10,
  count: 1,
};

export default function PostTable({ searchKey }) {
  const [list, setList] = useState([]);
  const [pagination, setPagination] = useState(initialState);

  const fetchPost = async (searchKey) => {
    try {
      let query = { page: pagination.page, limit: pagination.limit, searchKey };
      const response = await getAllPost(query);
      let data = response.data;
      setList(data.posts);
      setPagination({
        ...pagination,
        count: Math.ceil(data.count / pagination.limit),
      });
    } catch (err) {
      setList([]);
      setPagination({ ...initialState });
    }
  };

  useEffect(() => {
    if (pagination.page > 1) {
      setPagination((state) => ({ ...state, page: initialState.page }));
    } else {
      fetchPost(searchKey);
    }
  }, [searchKey]);

  useEffect(() => {
    fetchPost(searchKey);
  }, [pagination.page]);

  const handlePage = (val) => {
    setPagination({ ...pagination, page: val });
  };

  return (
    <div>
      <ResponsiveWrapper
        large={<DataTable columns={postColumns} rows={list} rowname="id" />}
        small={<MobilePost list={list} />}
      />

      <Pagination
        page={pagination.page}
        count={pagination.count}
        handlePage={(e, val) => handlePage(val)}
      />
    </div>
  );
}
