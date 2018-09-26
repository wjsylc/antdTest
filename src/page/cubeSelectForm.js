import React from 'react';
import { Form, Row, Col, Input, Button, Icon, Select } from 'antd';
import { connect } from 'dva';

const FormItem = Form.Item;
const selectNameList = ["Cube", "Cob_Date", "Topic", "File_Type", "Loading_Status"];
const namespace = 'cubeselectform';


const mapStateToProps = (state) => {
  const selectList = state[namespace].data;
  return {
    selectList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDidMount: () => {
      dispatch({
        type: `${namespace}/queryGetSelections`,
      });
    },
  };
};

@connect(mapStateToProps, mapDispatchToProps)
class AdvancedSearchForm extends React.Component {
	componentDidMount() {
    this.props.onDidMount();
  }
  handleSearch = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      console.log('Received values of form: ', values);
    });
  }

  handleReset = () => {
    this.props.form.resetFields();
  }



  // To generate mock Form.Item
  getFields(selectList) {
    const children = [];
	
    for (let i = 0; i < 5; i++) {
	  //const cubeOptions = selectList[selectNameList[i]].map(cube => <Option key = {cube} > {cube} </Option>);
      children.push(
        <Col span={4} key={i} >
          <FormItem label={selectNameList[i]}>
			<Select defaultValue= '' style={{ width: 180 }}>
			</Select>
          </FormItem>
        </Col>
      );
    }
    return children;
  }

  render() {
	
	const test = this.props.selectList;
    return (
		 
      <Form
        className="ant-advanced-search-form"
        onSubmit={this.handleSearch}
      >
	  
        <Row gutter={24}>{this.getFields(test)}</Row>
        <Row>
          <Col span={24} style={{ textAlign: 'right' }}>
			<Button type="primary" htmlType="submit">{test.Cube}</Button>
            <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
              Clear
            </Button>
            
          </Col>
        </Row>
      </Form>
    );
  }
}

const WrappedAdvancedSearchForm = Form.create()(AdvancedSearchForm);
export default WrappedAdvancedSearchForm;