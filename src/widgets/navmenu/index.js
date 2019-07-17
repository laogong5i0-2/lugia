import  React from 'react';
     import {Anchor,Grid} from '@lugia/lugia-web';
     import EditTables from '../../edit-table'; 
     import FooterNav from '../../footer-nav';
     import PageNavHoC from '../../common/PageNavHoC';
     import widgetrouter from '../../router/widgetrouter';
     import NAVMENU from '@lugia/lugia-web/dist/navmenu/lugia.navmenu.zh-CN.json';
        import Demo from '../code-box';
        import Title from '../code-box/Title';
         const DefaultNavMenu =  require('./DefaultNavMenu').default;  const EllipseNavMenu =  require('./EllipseNavMenu').default;  const VerticalNavMenu =  require('./VerticalNavMenu').default;  
        
        const { Link } = Anchor;
        const { Row,Col } = Grid;
        
      export default PageNavHoC(widgetrouter, class ComDemo extends React.Component {
            render(){
                const {next, prev} = this.props;
                return(
                    <Row>
                        <Col span={20}>
                          <div style={{paddingRight: '50px'}}>
                              <Title title={'导航菜单'} subTitle={'NavMenu'} desc={'为页面提供导航功能的菜单'} />
                              <Demo title={'侧栏导航 Primary 风格'} titleID={'navmenu-0'} code={<code>{ `/**\n * create by szfeng\n */\nimport React from \'react\';\nimport { Navmenu, Theme } from \'@lugia/lugia-web\';\nimport Widget from \'@lugia/lugia-web/dist/consts\';\nimport styled from \'styled-components\';\n\nconst NavMenuWrap = styled.div\`\n  display: inline-block;\n  margin: 10px;\n\`;\n\nconst data = [\n  {\n    value: \'Lugia Design of React\',\n    text: \'Lugia Design of React\',\n    icon: \'lugia-icon-financial_add_pic\'\n  },\n  {\n    value: \'Lugia-web\',\n    text: \'Lugia-web\',\n    icon: \'lugia-icon-financial_columns\'\n  },\n  { value: \'Lugia-mobile\', text: \'Lugia-mobile\' },\n  {\n    value: \'Components\',\n    text: \'Components\',\n    children: [\n      {\n        value: \'General\',\n        text: \'General\',\n        describe: true,\n        children: [\n          {\n            value: \'Button\',\n            text: \'Button\',\n            icon: \'lugia-icon-financial_add_pic\'\n          },\n          {\n            value: \'Icon\',\n            text: \'Icon\',\n            icon: \'lugia-icon-financial_archive\'\n          }\n        ]\n      },\n\n      {\n        value: \'Layout\',\n        text: \'Layout\',\n        describe: true,\n        children: [\n          { value: \'Grid\', text: \'Grid\' },\n        ]\n      },\n\n      {\n        value: \'Navigation\',\n        text: \'Navigation\',\n        describe: true,\n        children: [\n          { value: \'Affix\', text: \'Affix\' },\n          { value: \'Breadcrumb\', text: \'Breadcrumb\' }\n        ]\n      },\n\n      {\n        value: \'Data Entry\',\n        text: \'Data Entry\',\n        describe: true,\n        children: [\n          { value: \'AutoComplete\', text: \'AutoComplete\' },\n          { value: \'Cascader\', text: \'Cascader\' }\n        ]\n      }\n    ]\n  }\n];\n\nexport default class DefaultBreadcrumb extends React.Component<any, any> {\n  render() {\n    return [\n      <NavMenuWrap>\n        <Theme config={{ [Widget.Navmenu]: { height: 400 } }}>\n          <Navmenu data={data} />\n        </Theme>\n      </NavMenuWrap>,\n      <NavMenuWrap>\n        <Theme config={{ [Widget.Navmenu]: { height: 400 } }}>\n          <Navmenu data={data} theme={\'dark\'} />\n        </Theme>\n      </NavMenuWrap>\n    ];\n  }\n}\n`}</code>} desc={'可内嵌子菜单,默认为 Primary 风格的侧栏导航,通过theme：dark 切换不同的主题风格'}  demo={<DefaultNavMenu />}></Demo><Demo title={'侧栏导航 Ellipse 风格'} titleID={'navmenu-1'} code={<code>{ `/**\n * create by szfeng\n */\nimport React from \'react\';\nimport { Navmenu, Theme } from \'@lugia/lugia-web\';\nimport Widget from \'@lugia/lugia-web/dist/consts\';\nimport styled from \'styled-components\';\n\nconst NavMenuWrap = styled.div\`\n  display: inline-block;\n  margin: 10px;\n  overflow: hidden;\n\`;\n\nconst data = [\n  {\n    value: \'Lugia Design of React\',\n    text: \'Lugia Design of React\',\n    icon: \'lugia-icon-financial_add_pic\'\n  },\n  {\n    value: \'Lugia-web\',\n    text: \'Lugia-web\',\n    icon: \'lugia-icon-financial_columns\'\n  },\n  { value: \'Lugia-mobile\', text: \'Lugia-mobile\' },\n  {\n    value: \'Components\',\n    text: \'Components\',\n    children: [\n      {\n        value: \'General\',\n        text: \'General\',\n        describe: true,\n        children: [\n          {\n            value: \'Button\',\n            text: \'Button\',\n            icon: \'lugia-icon-financial_add_pic\'\n          },\n          {\n            value: \'Icon\',\n            text: \'Icon\',\n            icon: \'lugia-icon-financial_archive\'\n          }\n        ]\n      },\n\n      {\n        value: \'Layout\',\n        text: \'Layout\',\n        describe: true,\n        children: [\n          { value: \'Grid\', text: \'Grid\' },\n        ]\n      },\n\n      {\n        value: \'Navigation\',\n        text: \'Navigation\',\n        describe: true,\n        children: [\n          { value: \'Affix\', text: \'Affix\' },\n          { value: \'Breadcrumb\', text: \'Breadcrumb\' }\n        ]\n      },\n\n      {\n        value: \'Data Entry\',\n        text: \'Data Entry\',\n        describe: true,\n        children: [\n          { value: \'AutoComplete\', text: \'AutoComplete\' },\n          { value: \'Cascader\', text: \'Cascader\' }\n        ]\n      }\n    ]\n  }\n];\n\nexport default class DefaultBreadcrumb extends React.Component<any, any> {\n  render() {\n    return [\n      <NavMenuWrap>\n        <Navmenu data={data} inlineType={\'ellipse\'} />\n      </NavMenuWrap>,\n      <NavMenuWrap>\n        <Navmenu data={data} theme={\'dark\'} inlineType={\'ellipse\'} />\n      </NavMenuWrap>\n    ];\n  }\n}\n`}</code>} desc={'可内嵌子菜单,通过 inlineType：ellipse 设置ellipse风格的侧栏导航，通过theme：dark 切换不同的主题风格'}  demo={<EllipseNavMenu />}></Demo><Demo title={'垂直菜单'} titleID={'navmenu-2'} code={<code>{ `/**\n * create by szfeng\n */\nimport React from \'react\';\nimport { Navmenu, Theme } from \'@lugia/lugia-web\';\nimport Widget from \'@lugia/lugia-web/dist/consts\';\nimport styled from \'styled-components\';\n\nconst NavMenuWrap = styled.div\`\n  display: inline-block;\n  margin: 10px;\n\`;\n\nconst data = [\n  {\n    value: \'Lugia Design of React\',\n    text: \'Lugia Design of React\',\n    icon: \'lugia-icon-financial_add_pic\'\n  },\n  {\n    value: \'Lugia-web\',\n    text: \'Lugia-web\',\n    icon: \'lugia-icon-financial_columns\'\n  },\n  { value: \'Lugia-mobile\', text: \'Lugia-mobile\' },\n  {\n    value: \'Components\',\n    text: \'Components\',\n    children: [\n      {\n        value: \'General\',\n        text: \'General\',\n        describe: true,\n        children: [\n          {\n            value: \'Button\',\n            text: \'Button\',\n            icon: \'lugia-icon-financial_add_pic\'\n          },\n          {\n            value: \'Icon\',\n            text: \'Icon\',\n            icon: \'lugia-icon-financial_archive\'\n          }\n        ]\n      },\n\n      {\n        value: \'Layout\',\n        text: \'Layout\',\n        describe: true,\n        children: [\n          { value: \'Grid\', text: \'Grid\' },\n        ]\n      },\n\n      {\n        value: \'Navigation\',\n        text: \'Navigation\',\n        describe: true,\n        children: [\n          { value: \'Affix\', text: \'Affix\' },\n          { value: \'Breadcrumb\', text: \'Breadcrumb\' }\n        ]\n      },\n\n      {\n        value: \'Data Entry\',\n        text: \'Data Entry\',\n        describe: true,\n        children: [\n          { value: \'AutoComplete\', text: \'AutoComplete\' },\n          { value: \'Cascader\', text: \'Cascader\' }\n        ]\n      }\n    ]\n  }\n];\n\nexport default class DefaultBreadcrumb extends React.Component<any, any> {\n  render() {\n    return [\n      <NavMenuWrap>\n        <Theme\n          config={{\n            [Widget.Navmenu]: { width: 250 }\n          }}\n        >\n          <Navmenu data={data} mode={\'vertical\'} />\n        </Theme>\n      </NavMenuWrap>\n    ];\n  }\n}\n`}</code>} desc={'通过 mode: vertical 设置垂直菜单'}  demo={<VerticalNavMenu />}></Demo>
                              <EditTables dataSource={NAVMENU} />
                              <FooterNav prev={prev} next={next} />
                            </div>
                        </Col>
                        <Col span={4}>
                            <Anchor  slideType="line">
                                <Link title={'侧栏导航 Primary 风格'} href={'#navmenu-0'} /><Link title={'侧栏导航 Ellipse 风格'} href={'#navmenu-1'} /><Link title={'垂直菜单'} href={'#navmenu-2'} />
                            </Anchor>
                        </Col>
                    </Row>
                )
            }
         });   
        