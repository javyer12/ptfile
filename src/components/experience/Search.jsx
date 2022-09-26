import * as React from "react";
import { TextField, Container } from "@mui/material/";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";

import "../../style/Search.css";

function Search() {
      return (
            // <Paper
            //       component="form"
            //       sx={{ p: '2px 4px', display: 'flex', alignItems: 'justify', width: "50%", m: "auto" }}
            // >
            <Container
                  sx={{
                        alignItems: "center",
                        marginTop: "5%"
                  }}
            >
                  <TextField
                        sx={{
                              m: 1,
                              flex: 1,
                              width: "50%",
                              height: "5%",
                              marginLeft: "20%",
                        }}
                        placeholder="Search "
                        inputProps={{ "aria-label": "Search " }}
                  />
                  <Button variant="outlined" sx={{ mt: "20px" }}>
                        Search
                  </Button>
                  <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            </Container>
      );
}
export default Search;
