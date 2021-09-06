import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
// @material-ui/icons components
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import Notification from "@material-ui/icons/NotificationImportant";
//import EmojiEvents from "@material-ui/icons/EmojiEvents";
//import GroupAdd from "@material-ui/icons/GroupAdd";
//import InsertChartOutlined from "@material-ui/icons/InsertChartOutlined";
//import PieChart from "@material-ui/icons/PieChart";

// core components
import CardStats from "components/Cards/CardStats.js";

import componentStyles from "assets/theme/components/header.js";

const useStyles = makeStyles(componentStyles);

const Header = () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <>
      <div className={classes.header}>
        <Container
          maxWidth={false}
          component={Box}
          classes={{ root: classes.containerRoot }}
        >
          <div>
            <Grid container>
              <Grid item xl={3} lg={6} xs={12}>
                <CardStats
                  subtitle="Send Mass E-mails"
                  title="250,000"
                  icon={Notification}
                  color="bgError"
                  btnfn="sendEmail"
                  footer={
                    <>
                      <Box
                        component="span"
                        fontSize=".875rem"
                        color={theme.palette.success.main}
                        marginRight=".5rem"
                        display="flex"
                        alignItems="center"
                      >
                        <Box
                          component={ArrowUpward}
                          width="1.5rem!important"
                          height="1.5rem!important"
                        />{" "}
                        Ready
                      </Box>
                      <Box component="span" whiteSpace="nowrap">
                        Active
                      </Box>
                    </>
                  }
                />
              </Grid>
              <Grid item xl={3} lg={6} xs={12}>
                <CardStats
                  subtitle="Send Mass Texts"
                  title="250,000"
                  icon={Notification}
                  color="bgWarning"
                  btnfn="sendText"
                  footer={
                    <>
                      <Box
                        component="span"
                        fontSize=".875rem"
                        color={theme.palette.error.main}
                        marginRight=".5rem"
                        display="flex"
                        alignItems="center"
                      >
                        <Box
                          component={ArrowDownward}
                          width="1.5rem!important"
                          height="1.5rem!important"
                        />{" "}
                        Not Ready
                      </Box>
                      <Box component="span" whiteSpace="nowrap">
                        Disabled
                      </Box>
                    </>
                  }
                />
              </Grid>
              <Grid item xl={3} lg={6} xs={12}>
                <CardStats
                  subtitle="Send Mass Voice"
                  title="250,000"
                  icon={Notification}
                  color="bgWarningLight"
                  btnfn="sendVoice"
                  footer={
                    <>
                      <Box
                        component="span"
                        fontSize=".875rem"
                        color={theme.palette.warning.main}
                        marginRight=".5rem"
                        display="flex"
                        alignItems="center"
                      >
                        <Box
                          component={ArrowDownward}
                          width="1.5rem!important"
                          height="1.5rem!important"
                        />{" "}
                        Not Ready
                      </Box>
                      <Box component="span" whiteSpace="nowrap">
                        Disabled
                      </Box>
                    </>
                  }
                />
              </Grid>

            </Grid>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Header;
