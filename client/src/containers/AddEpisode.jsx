import React, { Component } from 'react';

import { Container } from 'react-bootstrap';
import { Button, Form, Row } from 'react-bootstrap';
import InputAddEpisode from '../components/form/InputAddEpisode';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createEpisode } from '../redux/actions/episode.action';
import update from 'immutability-helper';
import { produce } from 'immer';
// import Loader from 'react-loader-spinner';

class AddEpisode extends Component {
  constructor(props) {
    super(props);

    this.state = {
      episode: [],
      addEpisodes: [{ titleEp: '', linkEp: '', thumbnailEp: '' }],
    };
  }

  // Handle Add Button (Form Add Episode)
  handleAddEpisode = () => {
    const nextState = produce(this.state.addEpisodes, (draftState) => {
      draftState.push({ titleEp: '', linkEp: '', thumbnailEp: '' });
    });

    this.setState(
      (prevState) => ({
        addEpisodes: nextState,
      }),
      () => console.log(this.state)
    );
  };

  // Add Form Episode Component
  addEpisode = () => {
    return this.state.addEpisodes.map((input, index) => {
      return (
        <InputAddEpisode key={index} dataEpisode={index} handleOnChange={this.handleOnChange} />
      );
    });
  };

  // Get input value with on change handler
  handleOnChange = (e) => {
    const input = e.target;
    const value = input.value;

    let listForm = input.getAttribute('data-episode');

    if (input.name.includes('Ep')) {
      const nextState = produce(this.state.addEpisodes, (draftState) => {
        let newData = input.type === 'file' ? input.files[0] : value;
        draftState[listForm][input.name] = newData;
      });

      this.setState(
        {
          addEpisodes: nextState,
        },
        () => console.log(this.state)
      );
    }

    // if (input.type === 'file' && input.name.includes('Ep')) {
    //   const nextState = produce(this.state.addEpisodes, (draftState) => {
    //     draftState[listForm][input.name] = value;
    //   });
    //   this.setState({ episode: { ...this.state.episode, [input.name]: input.files[0] } }, () =>
    //     console.log(this.state)
    //   );
    // }
  };

  handleOnSubmit = (e) => {
    e.preventDefault();

    const dataEpisode = new FormData();

    dataEpisode.append('title', this.state.episode.titleEp);
    dataEpisode.append('thumbnailEp', this.state.episode.thumbnailEp);
    dataEpisode.append('linkEp', this.state.episode.linkEp);
    dataEpisode.append('filmId', this.props.match.params.idFilm);
    this.props.createEpisode(dataEpisode);

    document.getElementById('formAddEpisode').reset();
  };

  render() {
    const { episodes, loadingEpisode, errorEpisode } = this.props;
    return (
      <>
        <Container className="main-wrapper">
          <h1 className="mb-4">Add Episode</h1>
          <Row>
            <Form onSubmit={this.handleOnSubmit} id="formAddEpisode" className="w-100">
              {/* Episode */}
              {this.addEpisode()}
              <Button
                onClick={() => this.handleAddEpisode()}
                className="btn btn-full btn-add-episode"
              >
                +
              </Button>
              <Button type="submit" className="btn btn-red btn-full mt-3">
                Save
              </Button>
              <p className="text-center text-success mt-3">
                {!errorEpisode && !loadingEpisode && episodes
                  ? 'Episode has been saved successfully'
                  : false}
              </p>
            </Form>
          </Row>
        </Container>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    episodes: state.episodeReducer.episodes,
    loadingEpisode: state.episodeReducer.loading,
    errorEpisode: state.episodeReducer.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createEpisode: (value) => dispatch(createEpisode(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AddEpisode));
