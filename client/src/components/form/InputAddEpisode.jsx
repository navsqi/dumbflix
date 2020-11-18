import React, { Component } from 'react';
import { Col, InputGroup, FormControl, Form, Row } from 'react-bootstrap';

class InputAddEpisode extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Row>
          <Col md="8">
            <InputGroup className="mb-3">
              <FormControl
                name="titleEp"
                onChange={this.props.handleOnChange}
                type="text"
                placeholder="Title Episode"
                data-episode={this.props.dataEpisode}
              />
            </InputGroup>
          </Col>
          <Col md="4">
            <InputGroup className="mb-3">
              <Form.File id="fileThumbnailEp" className="formcheck-api-custom">
                <Form.File.Input
                  data-episode={this.props.dataEpisode}
                  name="thumbnailEp"
                  onChange={this.props.handleOnChange}
                  isValid
                />
                <Form.File.Label
                  className="btn btn-red btn-full attach-thumbnail"
                  data-browse="fileThumbnailEp"
                >
                  Attach Thumbnail
                </Form.File.Label>
              </Form.File>
            </InputGroup>
          </Col>
        </Row>
        <InputGroup className="mb-3">
          <FormControl
            onChange={this.props.handleOnChange}
            name="linkEp"
            type="text"
            placeholder="Link Film"
            data-episode={this.props.dataEpisode}
          />
        </InputGroup>
      </>
    );
  }
}

export default InputAddEpisode;
